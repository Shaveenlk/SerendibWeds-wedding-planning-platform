import React from 'react'
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import image from '../assets/heroSectionImg.png';

const fetchVendors = async () => {
  try {
    const response = await fetch('/vendors'); // Adjust the URL as per your backend setup
    if (!response.ok) {
      throw new Error('Failed to fetch vendors');
    }
    const data = await response.json();
    return data.vendors;
  } catch (error) {
    console.error('Error fetching vendors:', error);
    return [];
  }
};

const VendorInfoTile = ({ name, profileImageUrl }) => {
    return (
      <Grid item lg={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image={profileImageUrl}
              alt={`${name} profile`}
            />
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
};

const VendorInfocomp = () => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchVendors();
      setVendors(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Replace 'YOUR_BACKEND_BASE_URL' with the actual URL of your backend
    axios.get(`http://localhost:8000/api/getuser/${firebaseUserId}`)
      .then(response => {
        console.log('API response:', response);
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
        // Handle the error or set appropriate state to indicate the error
      });
  }, [firebaseUserId]); // The empty dependency array ensures that the effect runs once when the component mounts

  return (
    <Grid container spacing={2} sx={{ margin: '20px 80px' }}>
      {vendors.map((vendor) => (
        <VendorInfoTile key={vendor._id} name={vendor.name} profileImageUrl={vendor.logo} />
      ))}
    </Grid>
  );
};

export default VendorInfocomp;
