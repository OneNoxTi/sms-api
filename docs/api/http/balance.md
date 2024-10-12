---
title: Balance check
sidebar_label: Balance check
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import PspApi from '@site/src/components/PspApi.js';

Example of request to get the current balance status of the user's account in the [personal cabinet](../../general/getting_started.md).

`URI: /api/http.php`

Interaction with API is carried out via **HTTP** or **HTTPS** (recommended), parameters are transmitted by <a class="red-text">**GET**</a> or <a class="green-text">**POST**</a> method.

<div class="post-wrap">
    <div class="post-item">
        <div class="item-content">
            <div class="request-parameters">
            ## URI parameters
            <table class="t1">
                <tbody>
                    <tr>
                        <td>
                            <a class="name">**version**</a>
                            <a class="type">string</a>
                            <a class="required">required</a> <br/>
                            <a class="description">Protocol version: `http`, `https`</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="name">**login**</a>
                            <a class="type">string</a>
                            <a class="required">required*</a> <br/>
                            <a class="description">Your personal cabinet login, specified during [registration](../../general/registration.md)
                                <br/> *<sup>\*</sup>Required if authorization is performed using login and password*</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="name">**pass**</a>
                            <a class="type">string</a>
                            <a class="required">required*</a> <br/>
                            <a class="description">Your personal cabinet password specified during [registration](../../general/registration.md)
                                <br/> *<sup>\*</sup>Required if authorization is performed using login and password*</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="name">**key**</a>
                            <a class="type">string</a>
                            <a class="required">required*</a> <br/>
                            <a class="description">Your API key, which can be obtained in your [personal cabinet](../../client/settings/api_settings.md#how-to-get-an-api-key)
                                <br/> *<sup>\*</sup> Required if authorization is performed using API key*</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="name">**command**</a>
                            <a class="type">string</a>
                            <a class="required">required</a> <br/>
                            <a class="description">Request type: `balance`</a>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    </div>
    <div class="post-item">
        <div class="item-content">
            <div class="request-example">
                ## Request example
                <Tabs
                groupId="request-examples"
                defaultValue="login"
                values={[
                    { label: 'Login/password', value: 'login', },
                    { label: 'API key', value: 'apikey' }
                ]}
                >
                <TabItem value="login">
                ```
                /http.php?version=http&login=LOGIN&password=PASS&command=balance
                ```
                </TabItem>
                <TabItem value="apikey">
                ```
                /http.php?version=http&key=APIKEY&command=balance
                ```
                </TabItem>
                </Tabs>
            </div>
        </div>
    </div>
    <div class="post-item">
        <div class="item-content">
            <div class="response-parameters">
            ## Response parameters
            <table class="t1">
                <tbody>
                    <tr>
                        <td>
                            <a class="name">**balance**</a>
                            <a class="type">string</a> <br/>
                            <a class="description">Current balance status</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="name">**errors**</a>
                            <a class="type">string</a> <br/>
                            <a class="description">Error message</a>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    </div>
    <div class="post-item">
        <div class="item-content">
            <div class="response-example">
                ## Response examples
                <Tabs
                groupId="response-examples"
                defaultValue="successful"
                values={[
                    { label: 'Successful', value: 'successful', },
                    { label: 'Wrong login/password', value: 'wronglogin' },
                    { label: 'Unknown command', value: 'command' }
                ]}
                >
                <TabItem value="successful">
                ```
                balance:31.168300000000002
                ```
                </TabItem>
                <TabItem value="wronglogin">
                ```
                errors:Wrong login/password
                ```
                </TabItem>
                <TabItem value="command">
                ```
                errors:Unknown command
                ```
                </TabItem>
                </Tabs>
            </div>
        </div>
    </div>
</div>