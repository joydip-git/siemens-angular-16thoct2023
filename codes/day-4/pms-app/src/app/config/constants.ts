import { AuthService } from "../modules/authentication/services/auth.service"
import { ProductService } from "../modules/products/services/product.service"

export const PRODUCT_API_BASE_URL = 'http://127.0.0.1:3003/products'

export const AUTH_API_BASE_URL = 'http://127.0.0.1:3003/auth'

export const PRODUCT_SERVICE = {
    SERVICE_TOKEN: 'PRODUCT_SERVICE_TOKEN',
    SERVICE_TYPE: ProductService
}

export const AUTH_SERVICE = {
    SERVICE_TOKEN: 'AUTH_SERVICE_TOKEN',
    SERVICE_TYPE: AuthService
}