export const generateExperienceId = () =>
    `exp_${Date.now()}_${Math.floor(Math.random() * 1000)}`;