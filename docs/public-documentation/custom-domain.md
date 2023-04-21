---
sidebar_position: 3
---

# Custom Domain


## Own Server Relay Method

After version 2.2.19, there are two ways to use the Own Server Relay function if you want to.

- Method 1: Use Nginx or other web servers for simple configuration. That is, web server proxy.
- Method 2: Use full-site acceleration services (DCDN) from cloud providers such as AWS CloudFront and Cloudflare. That is, full-site acceleration services will proxy your domain name to the specified address and correctly set the request header to successfully access the domain name and display your project documentation.

### Method 1: Web Server

- You can use `Nginx` to proxy your service and use the Own Server Relay function.
- In `Nginx`, you can use the `proxy_pass` command, which is used to sent requests to other servers.
- In `Nginx`, you can use `proxy_set_header` command, which is used to set the requests headers that are sent to upstream servers through a proxy server.
- For example, you can add the following content to the `Nginx` configuration file for simple configuration.

```plaintext
server {
    ...
    location / {
        proxy_pass  http://{projectId}.apidog.io;
        proxy_set_header X-Apidog-Project-ID {projectId}；
        # Set your custom domain name to the Host value (Eg. app.apidog.com).
        proxy_set_header Host app.apidog.com;
        ...
    }
    ...
}

```

- Note: In the above configuration `{projectId}` is your project `id` ,please make sure to fill in the correct ID and set the `X-Apidog-Project-ID` request header correctly.

### Method 2: CDN Acceleration Service

- You can use CDN acceleration services (DCDN) provided by cloud vendors such as WS CloudFront and Cloudflare to configure the source station and customize the `HTTP` headers for back-to-origin, thus enabling you to use the intermediate server forwarding feature.

  In the full-site acceleration service, you can add your acceleration domain and perform the following two operations:

  - Configure the origin station information by selecting the domain as the source station type and correctly configuring the domain as:`{projectId}.apidog.io`
  - Add custom back-to-origin `HTTP` headers in the origin-pull configuration:
    - Parameter: `X-Apidog-Project-ID`
    - Value: `{projectId}`.

- Please note that in the aforementioned configuration, `{projectId}` refers to your project ID. Please ensure that the correct ID is filled in.


##  How to troubleshoot the issue of custom domain not taking effect?

- First, it usually takes about 10 minutes for the CNAME configuration to take effect, so please be patient.
- If it is still not effective for a long time, it may be caused by the following reasons:
  - CNAME configuration is unsuccessful, please go to the domain name management page to confirm whether the CNAME is correctly configured.
  - The domain name has not been filed.