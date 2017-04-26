export const API_ROOT = (process.env.NODE_ENV === 'production')
			? 'http://139.196.240.34:7070/'
			:'http://139.196.240.34:7070/'

export const CookieDomain = (process.env.NODE_ENV === 'production')
			? '.jackhu.top'
			:''
