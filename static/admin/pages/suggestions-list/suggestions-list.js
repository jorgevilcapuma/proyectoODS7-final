$(document).ready(function() {   
    var url = '/suggestions';

    $('#suggestionBox').DataTable({            
        "ajax": {
            "url": url,
            "dataSrc": ""
        },
        "columns": [
            { "data": "ID", "className": "id" },
            {
                "data": null,
                "render": function(data, type, row) {
                    return row.firstname + ' ' + row.lastname;
                },
                "className": "user"
            },
            { "data": "email", "className": "email" },
            { "data": "suggestion" }
        ],
        "scrollX": true,
        "lengthMenu": [5, 10, 20],
        "pagingType": "simple",
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.22/i18n/Spanish.json"
        }
    });
});