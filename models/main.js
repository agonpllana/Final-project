$.ajax({
    url: 'http://localhost:3000/contracts',
    type: 'GET',
    success: function (response) {
        console.log(response);
        for (let i = 0; i < response.data.length; i++) {

            $('#kontratat').append(`
                <h3>Nje kontrate u shtua ${response.data[i].nrProkurimit}</h3>
            `)
        }
    }
})
// THIS CREATES TABLES USING JQUERY...

$(document).ready(function () {
    $('#product-form').submit(function (e) {
        e.preventDefault();
        let obj = {
            nrProkurimit: $('#nrProkurimit').val(),
            llojiProkurimit: $('#llojiProkurimit').val(),
            aktivitetiProkurimit: $('#aktivitetiProkurimit').val(),
            dataInicimit: $('#dataInicimit').val(),
            dataPublikimit: $('#dataPublikimit').val(),
            dataNenshkrimit: $('#dataNenshkrimit').val(),
            dataImplementimit: $('#dataImplementimit').val(),
            dataPermbylljes: $('#dataPermbylljes').val(),
            cmimiKontrates: $('#cmimiKontrates').val(),
            cmimiTotal: $('#cmimiTotal').val(),
            emriKontratuesit: $('#emriKontratuesit').val()
        }
        $('#kontratat').append(`
        <tr>
        <th>Numri i prokurimit</th><td>`+obj.nrProkurimit+`</td></tr>
        <th>Lloji i prokurimit</th><td>`+obj.llojiProkurimit+`</td></tr>
        <th>Aktiviteti i prokurimit</th><td>`+obj.aktivitetiProkurimit+`</td></tr>
        <th>Data e inicimit</th><td>`+obj.dataInicimit+`</td></tr>
        <th>Data e publikimit</th><td>`+obj.dataPublikimit+`</td></tr>
        <th>Data e nenshkrimit</th><td>`+obj.dataNenshkrimit+`</td></tr>
        <th>Data e implementimit</th><td>`+obj.dataImplementimit+`</td></tr>
        <th>Data e permbylljes</th><td>`+obj.dataPermbylljes+`</td></tr>
        <th>Cmimi i kontrates</th><td>`+obj.cmimiKontrates+`</td></tr>
        <th>Cmimi total</th><td>`+obj.cmimiTotal+`</td></tr>
        <th>Emri i kontratuesit</th><td>`+obj.emriKontratuesit+`</td></tr>
    </tr>
                `)
        $('#product-form')[0].reset();

    })
})

/*
 ////////////////////////// THIS TO CONNECT WITH MONGODB(I GUESS...)

$('#submit-btn').click(function(e) {
    e.preventDefault();
        let obj = {
            nrProkurimit: $('#nrProkurimit').val(),
            llojiProkurimit: $('#llojiProkurimit').val(),
            aktivitetiProkurimit: $('#aktivitetiProkurimit').val(),
            dataInicimit: $('#dataInicimit').val(),
            dataPublikimit: $('#dataPublikimit').val(),
            dataNenshkrimit: $('#dataNenshkrimit').val(),
            dataImplementimit: $('#dataImplementimit').val(),
            dataPermbylljes: $('#dataPermbylljes').val(),
            cmimiKontrates: $('#cmimiKontrates').val(),
            cmimiTotal: $('#cmimiTotal').val(),
            emriKontratuesit: $('#emriKontratuesit').val()
        }
    $.ajax({
        url: 'http://localhost:3000/contracts',
        type: 'POST',
        data: obj,
        success: (response) => {
            $('#kontratat').append(`
            <tr>
            <th>Numri i prokurimit</th><td>`+obj.nrProkurimit+`</td></tr>
            <th>Lloji i prokurimit</th><td>`+obj.llojiProkurimit+`</td></tr>
            <th>Aktiviteti i prokurimit</th><td>`+obj.aktivitetiProkurimit+`</td></tr>
            <th>Data e inicimit</th><td>`+obj.dataInicimit+`</td></tr>
            <th>Data e publikimit</th><td>`+obj.dataPublikimit+`</td></tr>
            <th>Data e nenshkrimit</th><td>`+obj.dataNenshkrimit+`</td></tr>
            <th>Data e implementimit</th><td>`+obj.dataImplementimit+`</td></tr>
            <th>Data e permbylljes</th><td>`+obj.dataPermbylljes+`</td></tr>
            <th>Cmimi i kontrates</th><td>`+obj.cmimiKontrates+`</td></tr>
            <th>Cmimi total</th><td>`+obj.cmimiTotal+`</td></tr>
            <th>Emri i kontratuesit</th><td>`+obj.emriKontratuesit+`</td></tr>
        </tr>
         `)
        }
    })
    $('#product-form')[0].reset();
})
*/