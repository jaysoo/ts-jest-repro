/**
 * libs/shared/api/src/lib/proto/products_api.proto
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: version not set
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ApiProductFamilyCategory } from './apiProductFamilyCategory';

export interface ApiGetProductsRequest {
  familyCategory?: ApiProductFamilyCategory;
  pageNumber?: number;
  totalPages?: number;
}
