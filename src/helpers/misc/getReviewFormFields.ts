export const getReviewFormFields = (form: HTMLFormElement) => ({
  name: form.elements.namedItem('name') as HTMLInputElement,
  email: form.elements.namedItem('email') as HTMLInputElement,
  phone: form.elements.namedItem('phone') as HTMLInputElement,
  comment: form.elements.namedItem('comment') as HTMLInputElement,
  privacy: form.elements.namedItem('privacy') as HTMLInputElement,
});
