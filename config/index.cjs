/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx37edf342008c1617',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '69aa688aeccea8cb79e36f6c4de68748',

  PROVINCE: '贵州',
  CITY: '遵义',

  USERS: [
    {
      // 想要发送的人的名字
      name: '三宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oRo3M6Xu8EMrhFVhiOYe1ywVsjbA',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'EYKwSrvI203Qwivb-0gx9GRIwe-uG5fLGnGCWZc4HSU',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-31',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '三宝', year: '2000', date: '10-05',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '三宝', year: '2000', date: '10-31',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2018-10-22' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '0QZ8iCuGDmNz_hTpWWSh7Rz5Rxmrg7wj_OAhJXiYbaE',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oRo3M6Xu8EMrhFVhiOYe1ywVsjbA',
    }
  ],

}

module.exports = USER_CONFIG

