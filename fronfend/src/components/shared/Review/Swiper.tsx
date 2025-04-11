import { useState, useEffect } from 'react';
import { massegService } from './../../../services/reviews.ts';
import { Pagination, Scrollbar, A11y, EffectFlip } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './Card.tsx';
import img from '../../../assets/img/avatar-photo.png';

const breakPoints = {
    320: { slidesPerView: 1 },
    480: { slidesPerView: 2 },
    640: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
};

type Review = {
    _id: string;
    review: string;
    user: string;
    createdAt: string;
};

function SwaiperReview() {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                setLoading(true);
                const response = await massegService.getmasseg();

                if (
                    response &&
                    response.status === 'success' &&
                    Array.isArray(response.data)
                ) {
                    setReviews(response.data);
                } else {
                    throw new Error('Invalid response format');
                }
            } catch (err) {
                console.error('Error fetching reviews:', err);
                setError('Failed to fetch reviews');
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, []);

    if (loading)
        return <div className="py-10 text-center">Loading reviews...</div>;
    if (error)
        return <div className="py-10 text-center text-red-500">{error}</div>;

    return (
        <Swiper
            grabCursor={true}
            loop={reviews.length > 1}
            modules={[Pagination, Scrollbar, A11y, EffectFlip]}
            breakpoints={breakPoints}
            pagination={{ clickable: true }}
        >
            {reviews.map((review) => (
                <SwiperSlide key={review._id}>
                    <Card
                        description={review.review || 'No review provided'}
                        name={review.user || 'Anonymous'}
                        image={img}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SwaiperReview;
