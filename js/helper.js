const { ajax } = rxjs.ajax;
const { map } = rxjs.operators;
const SEARCH_REPOS = 'https://api.github.com/search/repositories?sort=stars&order=desc&q='

export default {
    fetchRepo: (query) => {
        const simple$ = ajax(`${SEARCH_REPOS}${query}`).pipe(map(e => e.response))
        
        return simple$.subscribe((simple) => {
            let result = document.getElementById('root')
            result.innerHTML = `
                <div style="margin-top: 2%" class="container">
                    <div style="margin: auto; width: 50%; padding: 10px;">
                        <span>Get the <b>Github repo and user</b> by github rest API</span>
                        <br></br>
                        <span>Get the total of <b style="color: red;">${simple.total_count}</b> repo on Github</span>
                    </div>
                    <div>
                        <ul class="list-group">
                            ${simple.items.map(detail => `
                                <li class="list-group-item">
                                    <h3 class="mb-1">${detail.full_name}</h3>
                                    <img src="${detail.owner.avatar_url}" class="rounded-circle" style="width: 150px;" alt="Avatar" />
                                    <h5>${detail.description}</h5>
                                    <br></br>
                                    <a href=${detail.html_url}}>Go to Repo</a>
                                </li>`)}
                        </ul>
                    </div>
                </div>`
        })
        
        // The RXJS ajax Reference Example

        // return simple$.subscribe((simple) => {
        // const simple$ = ajax('https://httpbin.org/get');

        // const complex$ = ajax({
        //     url: 'https://httpbin.org/post',
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //       'x-rxjs-is': 'Awesome!'
        //     },
        //     body: {
        //       hello: 'World!',
        //     }
        // });

        // return combineLatest(simple$, complex$).subscribe(([simple, complex]) => {
        //     const simpleResponse = JSON.stringify(simple.response, null, 2);
        //     const complexResponse = JSON.stringify(complex.response, null, 2);
        //     document.getElementById('root').innerHTML = `
        //         <div>
        //           <span><b>GET</b> https://httpbin.org/get</span>
        //           <pre>${simpleResponse}</pre>

        //           <span><b>POST</b> https://httpbin.org/post</span>
        //           <pre>${complexResponse}</pre>
        //         </div>`;
        // });
    }
}