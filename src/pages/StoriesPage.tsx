import { useEffect, useState } from 'react';
import axios from 'axios';
import StoryCard from '../components/StoryCard';
import { Helmet } from 'react-helmet-async';

interface Story {
    id: string;
    title: string;
    body: string;
    author: string;
    date: string;
    imageUrl?: string;
    mediaUrl?: string;
    mediaType?: string;
}

interface ApiResponse {
    stories: Story[];
}

const StoriesPage = () => {
    const [stories, setStories] = useState<Story[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        axios.get<ApiResponse>('/api/stories').then(res => {
            const fetchedStories = res.data.stories || [];
            setStories(fetchedStories);
            setLoading(false);
        }).catch(error => {
            console.error("Failed to fetch stories, showing sample video story:", error);
            setStories([]);
            setLoading(false);
        });
    }, []);

    return (
        <div className="min-h-screen bg-ivory dark:bg-dark-background section transition-colors duration-500">

            <Helmet>
                <title>Community Stories | BaliLore</title>
                <meta name="description" content="Explore authentic stories from locals and travelers sharing their experiences, traditions, and cultural moments in Bali." />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://balilore-staging.vercel.app/stories" />
                <meta property="og:title" content="Community Stories | BaliLore" />
                <meta property="og:description" content="Browse community-submitted stories that celebrate the rich culture and vibrant life of Bali." />
                <meta property="og:image" content="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://balilore-staging.vercel.app/stories" />
                <meta name="twitter:title" content="Community Stories | BaliLore" />
                <meta name="twitter:description" content="Discover heartfelt stories from the BaliLore community, told through words, images, and media." />
                <meta name="twitter:image" content="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80" />

                <link rel="icon" href="/favicon.ico" />
            </Helmet>

            <div className="container mx-auto px-6">
                <h1 className="font-playfair text-4xl md:text-5xl font-bold text-accent dark:text-white mb-12 text-center">Community Stories</h1>
                {loading ? (
                    <div className="text-center text-lg text-accent dark:text-dark-text-primary">Loading...</div>
                ) : stories.length === 0 ? (
                    <div className="text-center text-lg text-accent dark:text-dark-text-primary">
                        No stories yet. Be the first to <a href='/submit' className='text-primary underline'>share your story</a>!
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {stories.map(story => (
                            <StoryCard
                                key={story.id}
                                id={story.id}
                                title={story.title}
                                excerpt={story.body.slice(0, 100) + (story.body.length > 100 ? '...' : '')}
                                author={story.author}
                                date={story.date}
                                imageUrl={story.imageUrl}
                                mediaUrl={story.mediaUrl}
                                mediaType={story.mediaType}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default StoriesPage;