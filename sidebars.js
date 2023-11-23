require('dotenv-defaults').config()

let instruction_list = [
  'instruction/login',
]

if (process.env.PSP_NAME == 'AlphaSMS')
{
  instruction_list.push
  (
    'instruction/registration',
    'instruction/interface'
  )
}

if (process.env.PSP_NAME == 'AlphaSMS_2')
{
  instruction_list.push
  (
    'instruction/registration'
  )
}

module.exports = {
  instruction_list
};
