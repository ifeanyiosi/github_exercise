import {createClient} from '@supabase/supabase-js'

const supabase = createClient('https://ofajyxdpekxefwjymmtl.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9mYWp5eGRwZWt4ZWZ3anltbXRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTEyNDQ4ODcsImV4cCI6MTk2NjgyMDg4N30.0bt49si_J7ydq2vVh3OCpgckEhhm5PNddtpKzXCmpMA')

export{
    supabase
}