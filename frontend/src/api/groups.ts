import axios from 'axios';
import { getParams, getQueryString } from '../utils';
import { baseUrl } from '../utils/constants/baseUrl';

export const groupApi = {
  listGroups: (filters: GroupFilters) => {
    const params = getParams(filters);
    return axios.get<GroupModel[]>(getQueryString(`${baseUrl}/groups/?`, params))
  },
  getGroup: (groupId: string) => axios.get<GroupModel>(`${baseUrl}/groups/${groupId}`)
}

export type GroupModel = {
  id: number;
  group_type: string;
  campus: string;
  meeting_date: string;
  zip_code: number;
  demographic: string;
  additionalProps: [
    {
      childCare: boolean;
    }
  ];
}

export type GroupFilters = {
  campus: string;
  demographic: string;
  group_type: string;
  meeting_date: string;
  zip_code: string;
  child_care: boolean;
}

export const getEmptyFilters = (): GroupFilters => ({
  campus: '',
  demographic: '',
  group_type: '',
  meeting_date: '',
  zip_code: '',
  child_care: false,
});