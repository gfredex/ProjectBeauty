import React from 'react';
import { Button, Card, Col, Row, Space, Typography } from 'antd';
import type { Moment } from 'moment';
import { SvgIcon } from '@/components';
import { cn } from '@/utils/cn.ts';
import styles from './shedule.module.scss';
import PrevCalendar from '../../../assets/icons/colored/PrevCalendar.svg?react';
import NextCalendar from '../../../assets/icons/colored/NextCalendar.svg?react';
import FreeIcon from '../../../assets/icons/colored/FreeIcon.svg?react';
import BusyIcon from '../../../assets/icons/colored/BusyIcon.svg?react';

const { Title, Text } = Typography;

type ScheduleSlot = {
    time: string;
    status: 'Свободно' | 'Занято';
}

type Props = {
    selectedDate: Moment;
    startOfWeek: Moment;
    schedule: ScheduleSlot[];
    onDateChange: (date: Moment) => void;
    onWeekChange: (direction: 'prev' | 'next') => void;
}

const weekDays = [
    { label: 'ПН', offset: 1 },
    { label: 'ВТ', offset: 2 },
    { label: 'СР', offset: 3 },
    { label: 'ЧТ', offset: 4 },
    { label: 'ПТ', offset: 5 },
    { label: 'СБ', offset: 6 },
    { label: 'ВС', offset: 0 },
];

const Schedule: React.FC<Props> = ({
                                                  selectedDate,
                                                  startOfWeek,
                                                  schedule,
                                                  onDateChange,
                                                  onWeekChange,
                                              }) => {
    return (
        <div className={styles.wrappShedule}>
            <Row className={styles.headShedule} justify="space-between">
                <Title level={3} className={styles.title}>Мой график</Title>
                <Button type="link" className={styles.btnCalendar}>Смотреть Календарь</Button>
            </Row>

            <Row align="middle" justify="space-between" style={{ marginBottom: 16 }}>
                <Col className={styles.wrappBtnPrev}>
                    <Button icon={<SvgIcon Icon={PrevCalendar} />} onClick={() => onWeekChange('prev')} className={styles.btnPrev} />
                </Col>
                <Col flex="auto">
                    <Row gutter={8} justify="center" className={styles.weekDaysRow}>
                        {weekDays.map(({ label, offset }) => {
                            const day = startOfWeek.clone().add(offset, 'days');
                            const isSelected = day.isSame(selectedDate, 'day');
                            return (
                                <Col className={styles.wrappBtnDay} key={offset} flex="1">
                                    <Button
                                        block
                                        className={`${styles.btnDay} ${isSelected ? styles.selected : ''}`}
                                        type="default"
                                        onClick={() => onDateChange(day)}
                                    >
                                        <div className={styles.dayLabel}>{label}</div>
                                        <strong className={styles.dayNumber}>{day.date()}</strong>
                                    </Button>
                                </Col>
                            );
                        })}
                    </Row>
                </Col>
                <Col className={styles.wrappBtnNext}>
                    <Button icon={<SvgIcon Icon={NextCalendar} />} onClick={() => onWeekChange('next')} className={styles.btnNext} />
                </Col>
            </Row>

            <Space direction="vertical" style={{ width: '100%' }} size="middle">
                {schedule.length > 0 ? (
                    schedule.map((slot, index) => (
                        <Card
                            key={index}
                            className={cn(
                                styles,
                                'card',
                                slot.status === 'Занято' ? 'cardBusy' : 'cardFree',
                                index === schedule.length - 1 ? 'lastCard' : undefined
                            )}
                        >
                            <Row className={styles.slotRow}>
                                <Col className={styles.iconCol}>
                                    <SvgIcon Icon={slot.status === 'Свободно' ? FreeIcon : BusyIcon} />
                                </Col>
                                <Col flex="auto" className={styles.statusCol}>
                                    <Text className={cn(styles, 'status', slot.status === 'Занято' ? 'statusBusy' : undefined)}>
                                        {slot.status}
                                    </Text>
                                    <div className={cn(styles, 'address', slot.status === 'Занято' ? 'addressBusy' : undefined)}>
                                        Адрес: адрес салона или клиента
                                    </div>
                                </Col>
                                <Col className={styles.timeCol}>
                                    <Text className={cn(styles, 'time', slot.status === 'Занято' ? 'timeBusy' : undefined)}>
                                        {slot.time}
                                    </Text>
                                </Col>
                            </Row>
                        </Card>
                    ))
                ) : (
                    <Text>Нет слотов на выбранную дату.</Text>
                )}
            </Space>
        </div>
    );
};

export { Schedule };