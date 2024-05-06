import FollowingPage from 'pages/Following/FollowingPage';
import HomePage from 'pages/Home/HomePage';
import ProfilePage from 'pages/Profile/ProfilePage';
import UploadPage from 'pages/Upload/UploadPage';

export const publicRoutes = [
    { path: '', component: <HomePage /> },
    { path: '/following', component: <FollowingPage /> },
    { path: '/profile', component: <ProfilePage /> },
    { path: '/upload', component: <UploadPage />, layout: null },
];
export const privateRoutes = [];
