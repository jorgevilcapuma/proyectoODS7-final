$(document).ready(function() {   
    var url = '/contactanos';

    $('#suggestionBox').DataTable({            
        "ajax": {
            "url": url,
            "dataSrc": ""
        },
        "columns": [
            { "data": "id", "className": "id" },
            {
                "data": null,
                "render": function(data, type, row) {
                    return row.names + ' ' + row.lastname;
                },
                "className": "user"
            },
            { "data": "email", "className": "email" },
            { "data": "cellphone", "className": "cellphone" },
            { "data": "messageContact" },
            {
                "data": "dateContact",
                "className": "dateContact",
                "render": function(data, type, row) {
                    if (data) {
                        const dateObj = new Date(data);
                        const day = String(dateObj.getDate()).padStart(2, '0');
                        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
                        const year = dateObj.getFullYear();
                        const hours = String(dateObj.getHours()).padStart(2, '0');
                        const minutes = String(dateObj.getMinutes()).padStart(2, '0');
                        return `${day}-${month}-${year} ${hours}:${minutes}`;
                    }
                    return 'N/A';
                }
            },
            { "data": "status", "className": "status" },
        ],
        "scrollX": true,
        "lengthMenu": [5, 10, 20],
        "pagingType": "simple",
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.22/i18n/Spanish.json"
        }
    });
});