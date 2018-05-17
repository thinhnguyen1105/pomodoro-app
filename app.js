

// SOUND ICON
var cosa = $('#sound').attr('class');

$('#Capa_1').on('click',function(){


  if($('#sound').attr('class') == 'sound_cliked'){  
     
    
    $('#sound').attr('class', 'sound');
    $('#wave_1').attr('class', 'wave_1'); 
    $('#wave_2').attr('class', 'wave_2');
    $('#close_top').attr('class', 'close_top');
    
    

  }else {
    
    $('#sound').attr('class', 'sound_cliked');
    $('#wave_1').attr('class', 'wave_1_cliked');
    $('#wave_2').attr('class', 'wave_2_cliked');
    $('#close_top').attr('class', 'close_top_cliked');
    
  }
});

//SETTING ICON 
var functionBasedPropVal = anime({
    targets: '#functionBasedPropVal .el',
    rotate: function() { return anime.random(-360, 360); },
    duration: function() { return anime.random(1200, 1800); },
    duration: function() { return anime.random(800, 1600); },
    delay: function() { return anime.random(0, 1000); },
    direction: 'alternate',
    loop :true,
    autoplay: false
    
  });
  
  document.querySelector('#Capa_2').onclick = functionBasedPropVal.play;
