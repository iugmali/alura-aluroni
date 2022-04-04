import {useParams, Navigate} from 'react-router-dom';

export default function Admin() {
  const { user } = useParams();
  if (user === 'iugmali') {
    return (
      <div>Admin</div>
    );
  } else {
    return (
      <Navigate to={'/'} />
    );
  }
}