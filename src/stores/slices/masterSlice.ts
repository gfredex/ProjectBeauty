import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    ABOUT_STORAGE_KEY,
    EDUCATION_STORAGE_KEY,
    EXPERIENCE_STORAGE_KEY,
    PROFILE_STORAGE_KEY,
    ADDRESS_STORAGE_KEY,
    SERVICES_STORAGE_KEY,
} from '@/constants/storageKeys.ts';
import { defaultAboutText } from '@/constants/defaultTexts.ts';

export type EducationItem = {
    title: string;
    year: string;
};

export type ExperienceItem = {
    title: string;
    yearStart: string;
    yearEnd: string;
};

export type AddressState = {
    address: string;
    region: string;
};

export type ServiceItem = {
    title: string;
    description: string;
    price: string;
};

export type UserState = {
    name: string;
    email: string;
    phone: string;
    about: string;
    education: EducationItem[];
    experience: ExperienceItem[][];
    addressData: AddressState[];
    services: ServiceItem[];
};

const defaultEducation: EducationItem[] = [
    {
        title: 'Пэрис нэйл, курс «Комбинированный + аппаратный маникюр + наращивание на верхние формы + топ дизайн. Уровень 1»',
        year: '2024',
    },
];

const defaultExperience: ExperienceItem[][] = [
    [
        {
            title: 'Пэрис нэйл, курс «Комбинированный + аппаратный маникюр. Уровень 1»',
            yearStart: '2023',
            yearEnd: '2024',
        },
    ],
    [
        {
            title: 'Пэрис нэйл, курс «Комбинированный + аппаратный маникюр. Уровень 1»',
            yearStart: '2022',
            yearEnd: '2023',
        },
    ],
];

export const defaultAddressState: AddressState[] = [
    {
        address: 'Ул. Независимости, 56',
        region: 'Центральный район',
    },
];

const getInitialAbout = (): string => localStorage.getItem(ABOUT_STORAGE_KEY) || defaultAboutText;

const getInitialEducation = (): EducationItem[] => {
    const stored = localStorage.getItem(EDUCATION_STORAGE_KEY);
    return stored ? JSON.parse(stored) : defaultEducation;
};

const getInitialExperience = (): ExperienceItem[][] => {
    const stored = localStorage.getItem(EXPERIENCE_STORAGE_KEY);

    if (!stored) {
        localStorage.setItem(EXPERIENCE_STORAGE_KEY, JSON.stringify(defaultExperience));
        return defaultExperience;
    }

    try {
        const parsed = JSON.parse(stored);

        if (
            Array.isArray(parsed) &&
            parsed.every(
                (inner: unknown) =>
                    Array.isArray(inner) &&
                    inner.every(
                        (item: unknown) =>
                            typeof item === 'object' &&
                            item !== null &&
                            'title' in item &&
                            'yearStart' in item &&
                            'yearEnd' in item
                    )
            )
        ) {
            return (parsed as ExperienceItem[][]).map((subArray) =>
                subArray.map((item) => ({
                    title: item.title ?? '',
                    yearStart: item.yearStart ?? '',
                    yearEnd: item.yearEnd ?? '',
                }))
            );
        }

        return [[], []];
    } catch (e) {
        console.error('Failed to parse experience:', e);
        return [[], []];
    }
};

const getInitialAddress = (): AddressState[] => {
    const stored = localStorage.getItem(ADDRESS_STORAGE_KEY);

    if (!stored) {
        const initial = defaultAddressState;
        localStorage.setItem(ADDRESS_STORAGE_KEY, JSON.stringify(initial));
        return initial;
    }

    try {
        const parsed = JSON.parse(stored);

        if (
            Array.isArray(parsed) &&
            parsed.every((item) => typeof item === 'object' && item !== null && 'address' in item && 'region' in item)
        ) {
            return parsed.map((item) => ({
                address: item.address ?? '',
                region: item.region ?? '',
            }));
        }

        return [];
    } catch (error) {
        console.error('Invalid address JSON in localStorage:', error);
        return [];
    }
};

const getInitialServices = (): ServiceItem[] => {
    const stored = localStorage.getItem(SERVICES_STORAGE_KEY);
    if (!stored) {
        localStorage.setItem(SERVICES_STORAGE_KEY, JSON.stringify(defaultServices));
        return defaultServices;
    }

    try {
        const parsed = JSON.parse(stored);
        if (
            Array.isArray(parsed) &&
            parsed.every(
                (item) =>
                    typeof item === 'object' &&
                    item !== null &&
                    'title' in item &&
                    'description' in item &&
                    'price' in item
            )
        ) {
            return parsed.map((item) => ({
                title: item.title ?? '',
                description: item.description ?? '',
                price: item.price ?? '',
            }));
        }
        return [];
    } catch (error) {
        console.error('Invalid services JSON in localStorage:', error);
        return [];
    }
};

const defaultServices: ServiceItem[] = [
    {
        title: 'Дизайн',
        description: 'описание услуги',
        price: '100',
    },
];

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
    services: getInitialServices(),
};

const masterSlice = createSlice({
    name: 'master',
    initialState,
    reducers: {
        updateProfile(
            state,
            action: PayloadAction<Omit<UserState, 'about' | 'education' | 'experience' | 'addressData'>>
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
            localStorage.setItem(EDUCATION_STORAGE_KEY, JSON.stringify(action.payload));
        },
        updateExperience(state, action: PayloadAction<ExperienceItem[][]>) {
            state.experience = action.payload;
            localStorage.setItem(EXPERIENCE_STORAGE_KEY, JSON.stringify(action.payload));
        },
        updateAddress(state, action: PayloadAction<AddressState[]>) {
            state.addressData = action.payload;
            localStorage.setItem(ADDRESS_STORAGE_KEY, JSON.stringify(action.payload));
        },
        updateServices(state, action: PayloadAction<ServiceItem[]>) {
            state.services = action.payload;
            localStorage.setItem(SERVICES_STORAGE_KEY, JSON.stringify(action.payload));
        },
    },
});

export const { updateProfile, updateAbout, updateEducation, updateExperience, updateAddress, updateServices } =
    masterSlice.actions;

export default masterSlice.reducer;
