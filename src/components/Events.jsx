import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { LocationOnOutlined, AccessTimeOutlined } from '@mui/icons-material';
import { blogs } from '@/utils/blogs';
const events = [
  {
    title: "Salud Mental",
    address: "Av. Portugal 782, Santiago",
    date: "2024/02/18",
    time: "09:00",
    campus: "Sede Santiago",
    location: "Auditorio",
    image: 'https://posgrados.udp.cl/wp/wp-content/uploads/2023/12/MBA-UDP-92-scaled-1.jpg'
  },
  {
    title: "Salud Mental",
    address: "Av. Portugal 782, Santiago",
    date: "2024/02/18",
    time: "09:00",
    campus: "Sede Centro",
    location: "Auditorio",
    image: 'https://posgrados.udp.cl/wp/wp-content/uploads/2023/12/MBA-UDP-92-scaled-1.jpg'
  },
  {
    title: "Salud Mental",
    address: "Av. Portugal 782, Santiago",
    date: "2024/02/18",
    time: "09:00",
    campus: "Sede Santiago",
    location: "Auditorio",
    image: 'https://posgrados.udp.cl/wp/wp-content/uploads/2023/12/MBA-UDP-92-scaled-1.jpg'
  }
]

const Events = ({matches}) => {
  return (
    <div className='container col-12 col-lg-10 align-self-center'>
      <div className="row" style={{ padding: 0, margin: 0 }}>
        <div className="col-sm-12 text-center" style={{ padding: 0 }}>
          <h2 style={{ fontSize: '32px', fontWeight: 400, lineHeight: '40px' }}>Eventos</h2>
        </div>
      </div>

      <div className={`container col-12 ${matches ? 'd-flex' : ''} justify-content-center`}>
        {
          events.map((event, i) => (
            <Card
              className='col-sm-12 col-lg-4'
              key={i}
              sx={{
                // maxWidth: '25svw',
                boxShadow: 0,
                display: 'inline-block',
                margin: '0 10px'
              }}>
              <CardMedia
                component="img"
                alt={blogs[i].titulo}
                height="200"
                image={blogs[i].imagen}
              />
              <Typography
                variant="body2"
                sx={{
                  bgcolor: '#FF5253',
                  borderRadius: '0 50px 50px 0',
                  color: '#fff',
                  padding: '12px',
                  width: '50svw',
                  marginTop: "-55px",
                  position: 'relative',
                }}>
                {`${event.location} ${event.campus}`}
              </Typography>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ margin: 0, height: '4em' }}>
                  {`Conferencia ${(blogs[i].titulo).split(':')[0]}`}
                </Typography>
              </CardContent>
              <CardActions sx={{ borderBottom: '1px solid #A6A6A6', marginBottom: '10px' }}>
                <Typography size="medium" sx={{ padding: '0 5px', color: '#000', borderRight: '1px solid #A6A6A6' }}>
                  <LocationOnOutlined sx={{ marginRight: '5px' }} /> {event.address}
                </Typography>
                <Typography size="medium" sx={{ padding: '0 5px', color: '#000' }}>
                  <AccessTimeOutlined sx={{ marginRight: '5px' }} /> {event.time}
                </Typography>
              </CardActions>
            </Card>
          ))
        }
      </div>
    </div>
  );
}

export default Events;