import style from './MapCard.module.css';

interface MapCardProps {
    location: { title: string; address: string } | null; // Accept location as prop
}

export const MapCard: React.FC<MapCardProps> = ({ location }) => {
    if (!location) return null; // Return nothing if no location is selected

    return (
        <div className={style.mapContainer}>
            <img className={style.mapClass} src={`./maps/${location.title}.png`} alt={`Map of ${location.title}`} /> {/* Display selected map */}
        </div>
    );
};
