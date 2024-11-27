$(document).ready(function() {
    $('#getData').click(()=>{
        $.ajax({
            url:"https://product-server-json.onrender.com/products",
            type:"GET",
            dataType:"json",
            success: function(data){

                $("#listItem").empty();
                $("#cardItem").empty();

                data.forEach((e)=>{
                    const content = `
                        <tr class="align-middle">                    
                            <td class="d-flex align-items-center">
                                <div style="width: 45px; height: 45px;" class="rounded-circle bg-secondary overflow-hidden">
                                    <img src="${e.image}" alt="" class="w-100 h-100 object-fit-cover">
                                </div>
                            <div>
                                <p class="m-0 ms-2 fw-bold">${e.name}</p>
                            </div>
                            </td>
                            <td>
                                <p class="m-0 text-limit-2">
                                    ${e.description}
                                </p>
                            </td>
                            <td class="text-primary">${e.sku}</td>
                            <td class="text-danger ">$${e.price}</td>
                            <td class="text-warning ">${e.rating}</td>
                        </tr>
                    `

                    const card = `
                        <div class="col-3 my-3 ">
                            <div class="card overflow-hidden" style="width: 18rem;">
                                <div style="height: 250px;" class="w-100 ">
                                    <img src="${e.image}" class="w-100 h-100 object-fit-cover" alt="">
                                </div>
                                <div class="card-body p-3">
                                <h5 class="card-title m-0 text-limit-1">${e.name}</h5>
                                <p class="m-0 ">${e.sku}</p>
                                <p class="card-text text-limit-3 text-secondary">
                                    ${e.description}
                                </p>
                                <div class="d-flex justify-content-between">
                                    <p class="m-0 fs-6 fw-bold text-danger">$${e.price}</p>
                                    <p class="m-0 fs-6 fw-bold text-info">Rating ${e.rating}</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    `
                    $("#listItem").append(content);
                    $("#cardItem").append(card);
                })
            }
        })
    })
})