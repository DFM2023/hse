import request from '@/utils/request'

export const getData = () => {
  const data = 'start=0&limit=10&where_sql=&where_value=&where_type=&is_query=1&query_type=0'
  return request.post('commonAction.do?eventcode=query_data&funid=queryevent&pagetype=grid&query_funid=safe_insp&user_id=administrator', data)
}

