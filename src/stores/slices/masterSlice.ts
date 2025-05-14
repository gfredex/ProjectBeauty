import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    ABOUT_STORAGE_KEY,
    EDUCATION_STORAGE_KEY,
    EXPERIENCE_STORAGE_KEY,
    PROFILE_STORAGE_KEY,
    ADDRESS_STORAGE_KEY,
} from '@/constants/storageKeys.ts';
import { defaultAboutText } from '@/constants/defaultTexts.ts';
import { v4 as uuidv4 } from 'uuid';

export type EducationItem = {
    title: string;
    year: string;
};

export type ExperienceItem = {
    id: string;
    title: string;
    yearStart: string;
    yearEnd: string;
};

export type AddressState = {
    address: string;
    region: string;
};

export type UserState = {
    name: string;
    email: string;
    phone: string;
    about: string;
    education: EducationItem[];
    experience: ExperienceItem[];
    addressData: AddressState;
};

const defaultEducation: EducationItem[] = [
    {
        title:
            'Пэрис нэйл, курс «Комбинированный + аппаратный маникюр + наращивание на верхние формы + топ дизайн. Уровень 1»',
        year: '2024',
    },
];

const defaultExperience: ExperienceItem[] = [
    {
        id: uuidv4(),
        title: 'Пэрис нэйл, курс «Комбинированный + аппаратный маникюр. Уровень 1»',
        yearStart: '2023',
        yearEnd: '2024',
    },
    {
        id: uuidv4(),
        title: 'Пэрис нэйл, курс «Комбинированный + аппаратный маникюр. Уровень 1»',
        yearStart: '2022',
        yearEnd: '2023',
    },
];

export const defaultAddressState: AddressState = {
    address: 'Ул. Независимости, 56',
    region: 'Центральный район',
};

const getInitialAbout = () =>
    localStorage.getItem(ABOUT_STORAGE_KEY) || defaultAboutText;

const getInitialEducation = (): EducationItem[] => {
    const stored = localStorage.getItem(EDUCATION_STORAGE_KEY);
    return stored ? JSON.parse(stored) : defaultEducation;
};

const getInitialExperience = (): ExperienceItem[] => {
    const stored = localStorage.getItem(EXPERIENCE_STORAGE_KEY);

    if (!stored) {
        localStorage.setItem(
            EXPERIENCE_STORAGE_KEY,
            JSON.stringify(defaultExperience)
        );
        return defaultExperience;
    }

    const parsed = JSON.parse(stored);

    return parsed.map((item: Partial<ExperienceItem>) => ({
        id: item.id || uuidv4(),
        title: item.title || '',
        yearStart: item.yearStart || '',
        yearEnd: item.yearEnd || '',
    }));
};

const getInitialAddress = (): AddressState => {
    const stored = localStorage.getItem(ADDRESS_STORAGE_KEY);
    const initialized = localStorage.getItem('userAddressInitialized');

    if (!initialized) {
        localStorage.setItem('userAddressInitialized', 'true');
        localStorage.setItem(
            ADDRESS_STORAGE_KEY,
            JSON.stringify(defaultAddressState)
        );
        return defaultAddressState;
    }

    if (!stored || stored === 'undefined' || stored === 'null') {
        return { address: '', region: '' };
    }

    try {
        const parsed = JSON.parse(stored);
        if (
            typeof parsed === 'object' &&
            parsed !== null &&
            'address' in parsed &&
            'region' in parsed
        ) {
            return {
                address: parsed.address || '',
                region: parsed.region || '',
            };
        }
        return { address: '', region: '' };
    } catch (error) {
        console.error('Invalid address JSON in localStorage:', error);
        return { address: '', region: '' };
    }
};

const savedUser = localStorage.getItem(PROFILE_STORAGE_KEY);
const parsedUser = savedUser ? JSON.parse(savedUser) : {};

const initialState: UserState = {
    name: parsedUser.name || 'Маргарита Чернышова',
    email: parsedUser.email || 'margarita.chernushova@gmail.com',
    phone: parsedUser.phone || '89-990-078',
    about: getInitialAbout(),
    education: getInitialEducation(),
    experience: getInitialExperience(),
    addressData: getInitialAddress(),
};

const masterSlice = createSlice({
    name: 'master',
    initialState,
    reducers: {
        updateProfile(
            state,
            action: PayloadAction<
                Omit<UserState, 'about' | 'education' | 'experience' | 'addressData'>
            >
        ) {
            const newState = { ...state, ...action.payload };
            localStorage.setItem(
                PROFILE_STORAGE_KEY,
                JSON.stringify({
                    name: newState.name,
                    email: newState.email,
                    phone: newState.phone,
                })
            );
            state.name = newState.name;
            state.email = newState.email;
            state.phone = newState.phone;
        },
        updateAbout(state, action: PayloadAction<string>) {
            state.about = action.payload;
            localStorage.setItem(ABOUT_STORAGE_KEY, action.payload);
        },
        updateEducation(state, action: PayloadAction<EducationItem[]>) {
            state.education = action.payload;
            localStorage.setItem(
                EDUCATION_STORAGE_KEY,
                JSON.stringify(action.payload)
            );
        },
        updateExperience(state, action: PayloadAction<ExperienceItem[]>) {
            state.experience = action.payload;
            localStorage.setItem(
                EXPERIENCE_STORAGE_KEY,
                JSON.stringify(action.payload)
            );
        },
        updateAddress(state, action: PayloadAction<AddressState>) {
            state.addressData = action.payload;
            localStorage.setItem(
                ADDRESS_STORAGE_KEY,
                JSON.stringify(action.payload)
            );
        },
    },
});

export const {
    updateProfile,
    updateAbout,
    updateEducation,
    updateExperience,
    updateAddress,
} = masterSlice.actions;

export default masterSlice.reducer;