import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

const SimpleBackdrop = ({open, handleClose, children}) => {
  // const [open, setOpen] = useState(false);
  // const handleClose = () => {
  //   setOpen(false);
  // };
  // const handleOpen = () => {
  //   setOpen(true);
  // };

  return (
    <div>
      {/* <Button onClick={handleOpen}>Show backdrop</Button> */}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        {children}
      </Backdrop>
    </div>
  );
}

export default SimpleBackdrop;