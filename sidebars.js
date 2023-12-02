require('dotenv-defaults').config()

let instruction_list = [
  {
    type: 'category',
    label: 'General info',
    items: [
      'instruction/general/login',
      'instruction/general/registration',
      'instruction/general/interface'
    ],
  },
  {
    type: 'category',
    label: 'SMS',
    items: [
      {
        type: 'category',
        label: 'Send SMS',
        items: [
          'instruction/sms/send_sms/single_sms',
          'instruction/sms/send_sms/bulk_sms',
          'instruction/sms/send_sms/voice_mailing',
          'instruction/sms/send_sms/viber',
          'instruction/sms/send_sms/sender_id',
          'instruction/sms/send_sms/templates',
          'instruction/sms/send_sms/planner'
        ]
      },
      {
        type: 'category',
        label: 'Reports',
        items: [
          'instruction/sms/reports/single_sms_reports',
          'instruction/sms/reports/bulk_sms_reports',
          'instruction/sms/reports/api_reports',
          'instruction/sms/reports/base_cleaning_reports'
        ]
      },
      {
        type: 'category',
        label: 'Finances',
        items: [
          'instruction/sms/finances/payment',
          'instruction/sms/finances/balance',
          'instruction/sms/finances/documents',
          'instruction/sms/finances/transfer'
        ]
      },
      {
        type: 'category',
        label: 'Statistics',
        items: [
          'instruction/sms/statistics/days',
          'instruction/sms/statistics/operators',
          'instruction/sms/statistics/sender_id_statistics',
          'instruction/sms/statistics/viber_sender_id',
          'instruction/sms/statistics/countries'
        ]
      },
      {
        type: 'category',
        label: 'Incoming SMS',
        items: [
          'instruction/sms/incoming_sms/received_sms',
          'instruction/sms/incoming_sms/tariffs'
        ]
      },
      {
        type: 'category',
        label: 'Address Book',
        items: [
          'instruction/sms/address_book/recipients',
          'instruction/sms/address_book/black_list'
        ]
      },
      {
        type: 'category',
        label: 'HLR',
        items: [
          'instruction/sms/hlr/clear_base',
          'instruction/sms/hlr/hlr'
        ]
      },
      {
        type: 'category',
        label: 'Settings',
        items: [
          'instruction/sms/settings/profile',
          'instruction/sms/settings/api_settings',
          'instruction/sms/settings/sender_id_settings',
          'instruction/sms/settings/template_sms'
        ]
      },
      {
        type: 'category',
        label: 'Help',
        items: [
          'instruction/sms/help/help'
        ]
      }
    ]
  },
  {
    type: 'category',
    label: 'Clients',
    items: [
      {
        type: 'category',
        label: 'Clients',
        items: [
          'instruction/clients/clients/clients'
        ]
      },
      {
        type: 'category',
        label: 'Reports',
        items: [
          'instruction/clients/reports/single_sms_reports_clients',
          'instruction/clients/reports/bulk_sms_reports_clients',
          'instruction/clients/reports/api_reports_clients',
          'instruction/clients/reports/base_cleaning_reports_clients'
        ]
      },
      {
        type: 'category',
        label: 'Pages',
        items: [
          'instruction/clients/pages/pages'
        ]
      },
      {
        type: 'category',
        label: 'Menu',
        items: [
          'instruction/clients/menu/top_menu',
          'instruction/clients/menu/lower_menu'
        ]
      },
      {
        type: 'category',
        label: 'Finances',
        items: [
          'instruction/clients/finances/account',
        ]
      },
      {
        type: 'category',
        label: 'Statistics',
        items: [
          'instruction/clients/statistics/sender_id_statistics_clients',
          'instruction/clients/statistics/operators_clients',
          'instruction/clients/statistics/customers'
        ]
      },
      {
        type: 'category',
        label: 'Site',
        items: [
          'instruction/clients/site/pages_clients',
          'instruction/clients/site/manual',
          'instruction/clients/site/settings'
        ]
      },
      {
        type: 'category',
        label: 'Software',
        items: [
          'instruction/clients/software/software_versions',
          'instruction/clients/software/about'
        ]
      },
      {
        type: 'category',
        label: 'Mailing',
        items: [
          'instruction/clients/mailing/sms_sending'
        ]
      },
      {
        type: 'category',
        label: 'Support',
        items: [
          'instruction/clients/support/support'
        ]
      }
    ]
  }
  
]

module.exports = {
  instruction_list
};
