type ErrorData = {
  page500: {
    errorNumber: string
    errorMessage: string
  }
  page404: {
    errorNumber: string
    errorMessage: string
  }
}

export function ErrorPageData(): ErrorData {
  return {
    page500: {
      errorNumber: '500',
      errorMessage: 'Мы уже фиксим',
    },
    page404: {
      errorNumber: '404',
      errorMessage: 'Не туда попали',
    },
  }
}
