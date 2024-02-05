import React, { useState, useEffect } from 'react';
import { differenceInDays, differenceInHours, differenceInMinutes } from 'date-fns';

interface CountUpCardProps {
    label: string;
}

const CountUpCard: React.FC<CountUpCardProps> = ({ label }) => {
    const [countup, setCountUp] = useState(0);

    useEffect(() => {
        const startDate = new Date('2023-02-06T00:00:00Z');
        const currentDate = new Date();

        let value;

        switch (label.toLowerCase()) {
            case 'days':
                value = differenceInDays(currentDate, startDate);
                break;
            case 'hours':
                value = differenceInHours(currentDate, startDate);
                break;
            case 'minutes':
                value = differenceInMinutes(currentDate, startDate);
                break;
            default:
                value = 0;
        }

        setCountUp(value);
    }, [label]);

    return (
        <div className="text-[#FFFF] bg-secondary py-4 px-4 rounded-lg mt-10 border-8 border-primary">
            <p className="text-1xl">{countup} {label}</p>
        </div>
    );
}

export default CountUpCard;
