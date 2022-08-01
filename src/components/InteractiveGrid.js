import chicagoImage from './componentimages/chicago.jpg';
import londonImage from './componentimages/london.jpg';
import newYorkImage from './componentimages/newyork.jpg'
import newYorkImage2 from './componentimages/newyork2.jpg'
import parisImage from './componentimages/paris.jpg'
import seoulImage from './componentimages/seoul.jpg'
import shanghaiImage from './componentimages/shanghai.jpg'
import tokyoImage from './componentimages/tokyo.jpg'
import tokyoImage2 from './componentimages/tokyo2.jpg'
import bangkokImage from './componentimages/bangkok.jpg'
import seattleImage from './componentimages/seattle.jpg'
import laPazImage from './componentimages/lapaz.jpg'

function InteractiveGrid (props) {
  const imageArray = [chicagoImage, londonImage, newYorkImage, newYorkImage2, 
    parisImage, seoulImage, shanghaiImage, tokyoImage, tokyoImage2, bangkokImage,
    laPazImage, seattleImage]
  
  const processedImages = imageArray.map(image => {
    return (
    <div className = 'flex bg-white shadow rounded-lg border-2 border-cyan-200'>
      <div className='px-2 py-2'>
        <img
        src ={image}
        alt = 'alt'
        className='h-60 w-60 rounded bg-slate-200'
        onClick = {(event) => props.checkIfClicked(event.target.id)}
        id = {imageArray.indexOf(image)}/>
      </div>
    </div>
    )
  })

  //i'll be honest, i straight up copied this shuffle method; it works.
  // that's enough for me right now.
  function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

shuffle(processedImages)

  return ( 
    <div className = 'lg:grid grid-cols-6 grid-rows-2 gap-2 sm:flex sm:flex-col px-24'>
      {processedImages}
    </div>
  )
}

export default InteractiveGrid