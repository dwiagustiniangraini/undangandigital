import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vuknswbjdvcecwbnqels.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1a25zd2JqZHZjZWN3Ym5xZWxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2MjE1OTksImV4cCI6MjA3MDE5NzU5OX0.82geftdKMULGyjEKInTuE7iAyf-55MlWMBGl8WwtYKM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
