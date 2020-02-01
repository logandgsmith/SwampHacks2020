import React from 'react';
import ProductCard from 'react-ui-cards';
import jobs from '../config/jobs.json';

class JobCards extends React.Component {
    render() {
        return (
            <div className="JobCards">
                {jobs.map((job, index) => (
                    <ProductCard
                        photos = {job.photos}
                        price = {job.price}
                        productName = {job.productName}
                        description = {job.description}
                        url = {job.url}
                        buttonText = "Capture!"
                    />
                ))}
            </div>
        );
    }
}

export default JobCards;