interface MaxLength {
  input: number,
  textArea: number,
  images: number
}

export const inputValidationConfig: {maxLength: MaxLength} = {
  maxLength: {
    input: 150,
    textArea: 500,
    images: 3
  }
}
