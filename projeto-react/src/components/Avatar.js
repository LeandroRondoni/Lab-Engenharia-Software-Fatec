import {getImageUrl} from './utils.js'

function Avatar({person, size}) {
  // const avatar = 'https://i.imgur.com/7vQD0fPs.jpg'
  // const description = 'Gregorio Y. Zara'
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
    // <h1>Meu texto</h1>
  );
}

function Card({children}) {
  return (
    <div className='card'
    style={{
      border: '1px solid black',
      borderRadius: '25%',
      padding: 5,
      textAlign: 'center'
    }}>
      {children}
    </div>
  )
}


export default function Profile2(){
  return(
    <Card>
      <Avatar 
      size={100}
      person={{
        name: 'Katsuko Saruhashi',
        imageId: 'YfeOqp2'
      }}
      />
      <Avatar
      size={80}
      person={{
        name: 'Aklilu Lemma',
        imageId: 'OKS67lh'
      }}
      />
      <Avatar
      size={50}
      person={{
        name: 'Lin Lanying',
        imageId: '1bX5QH6'
      }}
      />
    </Card>
  )
}