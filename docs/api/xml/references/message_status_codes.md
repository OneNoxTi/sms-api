---
title: Message status codes
sidebar_label: Message status codes
hide_table_of_contents: true
---

Данные коды используются при возврате статусов сообщений

| Code | Status | Description |
| :--: | ------ | ----------- |
| 1 |  | Сообщение успешно принято |
| 100 | **SCHEDULED** | The message is scheduled. Delivery has not yet been initiated |
| 101 | **ENROUTE** | The message is in enroute state |
| 102 | **DELIVERED** | Message is delivered to destination |
| 103 | **EXPIRED** | Message validity period has expired |
| 104 | **DELETED** | Message has been deleted |
| 105 | **UNDELIVERABLE** | Message is undeliverable |
| 106 | **ACCEPTED** | Message is in accepted state (i.e. has been manually read on behalf of the subscriber by customer service) |
| 107 | **UNKNOWN** | Message is in invalid state The message state is unknown |
| 108 | **REJECTED** | Message is in a rejected state The message has been rejected by a delivery interface |
| 109 | **DISCARDED** | Message discarded |
| 110 | **SENDING** | Message in process of transferring to mobile network |
| 111 | **NOT_SUPPORTED** | Receiver’s operator is not supported. Message will not be billed |
| 112 | **WRONG_ALPHANAME** | Alphaname (sender’s name) was not approved by operator. Only for Life:) Ukraine |
| 113 | **WRONG_ALPHANAME_RETURNED** | Alphaname (sender’s name) was not approved by operator. Money for this SMS was returned. Only for Life:) Ukraine |
