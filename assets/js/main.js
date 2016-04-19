$.cloudinary.config({ cloud_name: 'lexmarkbudapest', api_key: '746523838173773'})

$.ajax({
     url: 'http://localhost:3000/api/event/img_signature',
     type: 'GET',
     success: function(response){
            $('.cloudinary-fileupload').fileupload({formData: response});
     }
});

$('.cloudinary-fileupload').bind('cloudinarydone', function(e, data) {  
	console.log('done');
});

$('.cloudinary-fileupload').bind('fileuploadstop', function(e, data){
	console.log('stop');
});

$('.cloudinary-fileupload').bind('fileuploadprogress', function(e, data) { 
	console.log(data.loaded +' / '+ data.total);
});

