var tones = {
	C1: new Audio('../media/sounds/treble/C1.wav'),
	Db1: new Audio('../media/sounds/treble/Db1.wav'),
	D1: new Audio('../media/sounds/treble/D1.wav'),
	Eb1: new Audio('../media/sounds/treble/Eb1.wav'),
	E1: new Audio('../media/sounds/treble/E1.wav'),
	F1: new Audio('../media/sounds/treble/F1.wav'),
	Gb1: new Audio('../media/sounds/treble/Gb1.wav'),
	G1: new Audio('../media/sounds/treble/G1.wav'),
	Ab1: new Audio('../media/sounds/treble/Ab1.wav'),
	A1: new Audio('../media/sounds/treble/A1.wav'),
	Bb1: new Audio('../media/sounds/treble/Bb1.wav'),
	B1: new Audio('../media/sounds/treble/B1.wav'),
	C2: new Audio('../media/sounds/treble/C2.wav'),
	Db2: new Audio('../media/sounds/treble/Db2.wav'),
	D2: new Audio('../media/sounds/treble/D2.wav'),
	Eb2: new Audio('../media/sounds/treble/Eb2.wav'),
	E2: new Audio('../media/sounds/treble/E2.wav'),
	F2: new Audio('../media/sounds/treble/F2.wav'),
	Gb2: new Audio('../media/sounds/treble/Gb2.wav'),
	G2: new Audio('../media/sounds/treble/G2.wav'),
	Ab2: new Audio('../media/sounds/treble/Ab2.wav'),
	A2: new Audio('../media/sounds/treble/A2.wav'),
	Bb2: new Audio('../media/sounds/treble/Bb2.wav')
}

var chords = {
	alpha:[tones.C1,tones.E1,tones.G1,tones.B1],
	beta:[tones.F1,tones.A1,tones.C2,tones.E2],
	gamma:[tones.G1,tones.B1,tones.D2,tones.F2],
	delta:[tones.A1,tones.C2,tones.E2,tones.G2]
}

var boundChord = chords.alpha

var down7=false
var down8=false
var down9=false
var down0=false

$(document).ready(function(){
	$(document).keydown(function(event){
////////// Left hand events		
		if(event.which === 49){
			console.log('1!')
			$('#chords .keybound').removeClass('on')
			$('#1').addClass('on')
			boundChord = chords.alpha
		}
		if(event.which === 50){
			console.log('2!')
			$('#chords .keybound').removeClass('on')
			$('#2').addClass('on')
			boundChord = chords.beta
		}
		if(event.which === 51){
			console.log('3!')
			$('#chords .keybound').removeClass('on')
			$('#3').addClass('on')
			boundChord = chords.gamma
		}
		if(event.which === 52){
			console.log('4!')
			$('#chords .keybound').removeClass('on')
			$('#4').addClass('on')
			boundChord = chords.delta
		}

/////////// Right hand events
		if(event.which === 55 && down7===false){
			down7=true
			console.log('7!')
			$('#7').addClass('on')
			boundChord[0].play()
		}
		if(event.which === 56 && down8===false){
			down8=true
			console.log('8!')
			$('#8').addClass('on')
			boundChord[1].play()
		}
		if(event.which === 57 && down9===false){
			down9=true
			console.log('9!')
			$('#9').addClass('on')
			boundChord[2].play()
		}
		if(event.which === 48 && down0===false){
			down0=true
			console.log('0!')
			$('#0').addClass('on')
			boundChord[3].play()
		}
	})
	$(document).keyup(function(event){
		if(event.which === 55){
			console.log('7!')
			$('#7').removeClass('on')
			down7=false
			boundChord[0].pause()
			boundChord[0].currentTime = 0
		}
		if(event.which === 56){
			console.log('8!')
			$('#8').removeClass('on')
			down8=false
			boundChord[1].pause()
			boundChord[1].currentTime = 0			
		}
		if(event.which === 57){
			console.log('9!')
			$('#9').removeClass('on')
			down9=false
			boundChord[2].pause()
			boundChord[2].currentTime = 0
		}
		if(event.which === 48){
			console.log('0!')
			$('#0').removeClass('on')
			down0=false
			boundChord[3].pause()
			boundChord[3].currentTime = 0
		}
	})
})