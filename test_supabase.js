import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lklymebmmlchguxqlmit.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxrbHltZWJtbWxjaGd1eHFsbWl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE5MTg1NTksImV4cCI6MjEwNzQ5NDU1OX0.CNiFO_gljV8cJsgc8RZxc9-6YElPb-mslnzTKc7Sph0';

console.log('--- Testing Supabase Connection ---');
console.log('Project URL:', supabaseUrl);

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testConnection() {
  try {
    console.log('\n1. Checking connection & inquiries table...');
    const { data, error, status, statusText } = await supabase
      .from('inquiries')
      .select('*')
      .limit(1);

    console.log('HTTP Status:', status, statusText || '');

    if (error) {
      console.error('❌ Supabase Query Error:', error.message);
      console.error('Error Details:', error);
      if (error.code === '42P01') {
        console.log('👉 Note: Table "inquiries" does not exist yet in your Supabase database.');
      } else if (error.code === 'PGRST301' || status === 401 || status === 403) {
        console.log('👉 Note: Authentication or RLS (Row Level Security) policy restricted this read.');
      }
    } else {
      console.log('✅ Connected successfully! Received response from "inquiries" table.');
      console.log('Records returned:', data ? data.length : 0);
    }

    console.log('\n2. Testing insert capability (dry-run/test record)...');
    const testRecord = {
      name: 'Antigravity Test',
      email: 'test@example.com',
      message: 'Connection check from test_supabase.js',
      status: 'new'
    };

    const insertResult = await supabase
      .from('inquiries')
      .insert([testRecord])
      .select();

    if (insertResult.error) {
      console.log('⚠️ Insert check:', insertResult.error.message);
      console.log('Error Code:', insertResult.error.code);
    } else {
      console.log('✅ Insert successful! Created record ID:', insertResult.data?.[0]?.id);
      
      // Clean up test record if inserted
      if (insertResult.data?.[0]?.id) {
        console.log('Cleaning up test record...');
        await supabase
          .from('inquiries')
          .delete()
          .eq('id', insertResult.data[0].id);
        console.log('Cleaned up test record.');
      }
    }

  } catch (err) {
    console.error('❌ Unexpected Connection Error:', err.message || err);
  }
}

testConnection();
