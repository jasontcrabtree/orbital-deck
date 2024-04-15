import '@testing-library/jest-dom';

global.fetch = () => Promise.resolve(new Response());
