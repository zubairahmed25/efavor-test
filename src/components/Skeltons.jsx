import Skeleton from 'react-loading-skeleton';

const ProductSkeltons = () => {
    return (
        <div className="row">
            {
                Array.from({ length: 3 }).map((_, i) => (
                    <div className="column" key={i}>
                        {Array.from({ length: 10 }, () => (
                            <Skeleton height={(Math.random()*200)+100} key={crypto.randomUUID()} />
                        ))}
                    </div>
                ))
            }
        </div>
    );
};

export default ProductSkeltons;