---
title: Send SMS
sidebar_label: Send SMS
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Example of request to send SMS message to the specified number.

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
                            <a class="description">Request type: `send`</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="name">**from**</a>
                            <a class="type">string</a>
                            <a class="required">required</a> <br/>
                            <a class="description">The name (phone number) of the sender <br/> Latin characters or numbers up to 11 characters, dot, dash, underscore </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="name">**to**</a>
                            <a class="type">string</a>
                            <a class="required">required</a> <br/>
                            <a class="description">Recipient's phone number in international format format (for Ukraine it is possible in local)</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="name">**message**</a>
                            <a class="type">string</a> 
                            <a class="required">required</a> <br/>
                            <a class="description">Message text in UTF8 encoding</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="name">**wap**</a>
                            <a class="type">string</a> <br/>
                            <a class="description">Link to the site. To send Wap-Push messages</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="name">**flash**</a>
                            <a class="type">string</a> <br/>
                            <a class="description">Send a message as a Flash message</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="name">**ask_date**</a>
                            <a class="type">string</a> <br/>
                            <a class="description">Date and time the message was sent in ISO-8601 format: 2024-08-15T15:52:01+0200</a>
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
                ```
                /http.php?version=http&key=APIKEY&command=send&from=test&to=380501234567
                &message=text
                ```
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
                            <a class="name">**id**</a>
                            <a class="type">string</a> <br/>
                            <a class="description">SMS identifier generated by the gateway</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a class="name">**smd_count**</a>
                            <a class="type">string</a> <br/>
                            <a class="description">Amount of messages sent</a>
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
                id:84523377 sms_count:1
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