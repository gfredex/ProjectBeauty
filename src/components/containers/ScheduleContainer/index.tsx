import React, { useState } from 'react';
import moment, { Moment } from 'moment';
import { Schedule } from '@/components';

const mockSchedule = {
    '2025-05-07': [
        { time: '11:30', status: 'Свободно' },
        { time: '13:30', status: 'Занято' },
        { time: '15:00', status: 'Свободно' },
    ],
};

const ScheduleContainer: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Moment>(moment());

    const startOfWeek = selectedDate.clone().startOf('week');
    const schedule = mockSchedule[selectedDate.format('YYYY-MM-DD')] || [];

    const handleWeekChange = (direction: 'prev' | 'next') => {
        setSelectedDate(prev =>
            prev.clone().add(direction === 'next' ? 7 : -7, 'days')
        );
    };

    return (
        <Schedule
            selectedDate={selectedDate}
            startOfWeek={startOfWeek}
            schedule={schedule}
            onDateChange={setSelectedDate}
            onWeekChange={handleWeekChange}
        />
    );
};

export { ScheduleContainer };