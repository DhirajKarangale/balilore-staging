import { Link } from 'react-router-dom';

interface StoryCardProps {
    id: string;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    imageUrl?: string;
    mediaUrl?: string;
    mediaType?: string;
}

function getInitials(name: string) {
    if (!name) return '?';
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
}

const StoryCard = ({
    id,
    title,
    excerpt,
    author,
    date,
    imageUrl,
    mediaUrl,
    mediaType
}: StoryCardProps) => {
    const displayUrl = mediaUrl || imageUrl;
    console.log(`StoryCard (id: ${id}): imageUrl=${imageUrl}, mediaUrl=${mediaUrl}, displayUrl=${displayUrl}`);

    return (
        <div className="card group relative overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-card-hover bg-white dark:bg-dark-card-background text-accent dark:text-dark-text-primary">
            <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mr-3">
                    {getInitials(author)}
                </div>
                <div>
                    <div className="font-lora text-sm text-gray-700 dark:text-dark-text-secondary font-semibold group-hover:text-primary transition-colors">By {author}</div>
                    <div className="text-xs text-gray-400 dark:text-dark-text-secondary">{date}</div>
                </div>
            </div>
            <div className="relative overflow-hidden rounded-lg mb-4 w-full h-48 bg-lightgray dark:bg-gray-700 flex items-center justify-center">
                {mediaType === 'video' && displayUrl ? (
                    <video
                        src={displayUrl}
                        className="block w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        controls
                        playsInline
                        muted
                        loop
                    />
                ) : (
                    <img
                        src={displayUrl}
                        alt={title}
                        className="block w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = '/placeholder-image.jpg';
                        }}
                    />
                )}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Link to={`/story/${id}`} className="btn-primary text-base px-6 py-2">Read More</Link>
                </div>
            </div>
            <h3 className="font-playfair text-xl font-bold mb-2 text-accent dark:text-dark-text-primary group-hover:text-primary transition-colors">
                {title}
            </h3>
            <p className="font-lora text-gray-700 dark:text-dark-text-secondary mb-4 line-clamp-3">{excerpt}</p>
        </div>
    );
};

export default StoryCard;