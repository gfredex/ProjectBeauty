import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const ABOUT_STORAGE_KEY = 'userAbout';
const EDUCATION_STORAGE_KEY = 'userEducation';
const EXPERIENCE_STORAGE_KEY = 'userExperience';
const PROFILE_STORAGE_KEY = 'userProfile';
const ADDRESS_STORAGE_KEY = 'userAddress';

const defaultAboutText = `Мастер с опытом работы 6 лет! Профессиональная стерилизация инструментов. 
Для каждого клиента используется индивидуальная пилка. 
Работы на качественных материалах. Выполняю маникюр, ремонт ногтей, наращивание, педикюр, все виды дизайнов.
Маникюр с покрытием и любым дизайном 40₽. Наращивание с покрытием и любым дизайном 50₽.
Педикюр (только пальчики покрытие) 40₽. Педикюр (обработка стоп и пальчики с покрытием) 50₽.`;

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

const defaultEducation: EducationItem[] = [
    {
        title: 'Пэрис нэйл, курс «Комбинированный + аппаратный маникюр + наращивание на верхние формы + топ дизайн. Уровень 1»',
        year: '2024',
    },
];

const defaultExperience: ExperienceItem[] = [
    {
        title: 'Пэрис нэйл, курс «Комбинированный + аппаратный маникюр + наращивание на верхние формы + топ дизайны. Уровень 1»',
        yearStart: '2024',
        yearEnd: '2025',
    },
];

const defaultAddressState: AddressState = {
    address: '',
    region: '',
};

const getInitialAbout = () => localStorage.getItem(ABOUT_STORAGE_KEY) || defaultAboutText;

const getInitialEducation = (): EducationItem[] => {
    const stored = localStorage.getItem(EDUCATION_STORAGE_KEY);
    return stored ? JSON.parse(stored) : defaultEducation;
};

const getInitialExperience = (): ExperienceItem[] => {
    const stored = localStorage.getItem(EXPERIENCE_STORAGE_KEY);
    return stored ? JSON.parse(stored) : defaultExperience;
};

const getInitialAddress = (): AddressState => {
    const stored = localStorage.getItem(ADDRESS_STORAGE_KEY);
    return stored ? JSON.parse(stored) : defaultAddressState;
};

type UserState = {
    name: string;
    email: string;
    phone: string;
    about: string;
    education: EducationItem[];
    experience: ExperienceItem[];
    addressData: AddressState;
};

const defaultUser: UserState = {
    name: 'Маргарита Чернышова',
    email: 'margarita.chernushova@gmail.com',
    phone: '89-990-078',
    about: getInitialAbout(),
    education: getInitialEducation(),
    experience: getInitialExperience(),
    addressData: getInitialAddress(),
};

const savedUser = localStorage.getItem(PROFILE_STORAGE_KEY);
const initialState: UserState = savedUser
    ? {
        ...JSON.parse(savedUser),
        about: getInitialAbout(),
        education: getInitialEducation(),
        experience: getInitialExperience(),
        addressData: getInitialAddress(),
    }
    : defaultUser;

const masterSlice = createSlice({
    name: 'master',
    initialState,
    reducers: {
        updateProfile(state, action: PayloadAction<Omit<UserState, 'about' | 'education' | 'experience' | 'addressData'>>) {
            const newState = { ...state, ...action.payload };
            localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify({
                name: newState.name,
                email: newState.email,
                phone: newState.phone,
            }));
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
        updateExperience(state, action: PayloadAction<ExperienceItem[]>) {
            state.experience = action.payload;
            localStorage.setItem(EXPERIENCE_STORAGE_KEY, JSON.stringify(action.payload));
        },
        updateAddress(state, action: PayloadAction<AddressState>) {
            state.addressData = action.payload;
            localStorage.setItem(ADDRESS_STORAGE_KEY, JSON.stringify(action.payload));
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