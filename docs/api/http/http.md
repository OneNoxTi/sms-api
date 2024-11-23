---
title: Request structure
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ApiUrl from '@site/src/components/apiUrl.js';

All requests to the gateway API are sent in **JSON** using the <a class="red-text">**GET**</a> or <a class="green-text">**POST**</a> method.

## Endpoint

Base URL for API requests: **<ApiUrl/>**

## Authorization

Each request must contain your API key obtained from your [personal cabinet](../../client/settings/api_settings.md#how-to-get-an-api-key).

```
/api/http.php?version=http&key=APIKEY&command=balance
```
