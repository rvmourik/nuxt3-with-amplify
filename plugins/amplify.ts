import { Amplify } from '@aws-amplify/core';
import { Auth } from '@aws-amplify/auth';
import { defineNuxtPlugin } from '#app';
import { useRuntimeConfig } from '#imports';

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig();

    Amplify.configure({
        aws_project_region: 'us-east-2',
        aws_cognito_region: 'us-east-2',
        aws_user_pools_id: 'us-east-2_w3fioLOX9',
        aws_user_pools_web_client_id: '4qh1oqaqt7b95d4m8lavbu2qpc',
        aws_cognito_username_attributes: ['EMAIL'],
        aws_cognito_social_providers: [],
        aws_cognito_signup_attributes: ['GIVEN_NAME', 'FAMILY_NAME', 'UPDATED_AT'],
        aws_cognito_password_protection_settings: {
            passwordPolicyMinLength: 8,
            passwordPolicyCharacters: [
                'REQUIRES_LOWERCASE',
                'REQUIRES_UPPERCASE',
                'REQUIRES_NUMBERS',
                'REQUIRES_SYMBOLS'
            ]
        },
        aws_cognito_verification_mechanisms: ['EMAIL']
    });

    return {
        provide: {
            auth: Auth
        }
    };
});
