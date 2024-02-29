import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { LocationOnOutlined, AccessTimeOutlined } from '@mui/icons-material';

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
    campus: "Sede Santiago",
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

const Events = () => {
  return (
    <div className='container center'>
      <div className="row" style={{ padding: 0, margin: 0 }}>
        <div className="col-sm-12 text-center" style={{ padding: 0}}>
        <h2 style={{ fontSize: '32px', fontWeight: 400, lineHeight: '40px' }}>Eventos</h2>
        </div>
      </div>
      {
        events.map((event, i) => (
          <Card key={i} sx={{ maxWidth: '90svw', margin: 'auto', boxShadow: 0 }}>
            <CardMedia
              component="img"
              alt={event.title}
              height="200"
              image={event.image}
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
              <Typography gutterBottom variant="h5" component="div" sx={{ margin: 0 }}>
                {`Conferencia ${event.title}`}
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
  );
}

export default Events;