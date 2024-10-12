---
title: Request structure
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import PspApiUrl from '@site/src/components/apiUrl.js';

Interaction with API is carried out via **HTTP** or **HTTPS** (recommended), parameters are transmitted by <a class="red-text">**GET**</a> or <a class="green-text">**POST**</a> method.

## Endpoint

Base URL for API requests: **<PspApiUrl/>**

## Authorization

Each request must contain your API key obtained from your [personal cabinet](../../client/settings/api_settings.md#how-to-get-an-api-key).

```
/api/http.php?version=http&key=APIKEY&command=balance
```
