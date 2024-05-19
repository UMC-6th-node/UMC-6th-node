// temp.service.js

import { tempResponseDto } from '../dtos/temp.response.dto.js'
import { flagResponseDTO } from '../dtos/temp.response.dto.js'

import { BaseError } from '../../config/error.js'
import { status } from '../../config/response.status.js'

export const getTempData = () => {
  return tempResponseDto('This is Test! >.0')
}

export function checkFlag(flag) {
  if (flag == 1) throw new BaseError(status.BAD_REQUEST)
  else {
    return flagResponseDTO(flag)
  }
}
