(function() {var implementors = {};
implementors['num'] = ["<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;<a class='struct' href='num/bigint/struct.BigUint.html' title='num::bigint::BigUint'>BigUint</a>&gt; for <a class='struct' href='num/bigint/struct.BigUint.html' title='num::bigint::BigUint'>BigUint</a>","<a class='stability Stable' title='Stable'></a>impl&lt;'a&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;<a class='struct' href='num/bigint/struct.BigUint.html' title='num::bigint::BigUint'>BigUint</a>&gt; for &amp;'a <a class='struct' href='num/bigint/struct.BigUint.html' title='num::bigint::BigUint'>BigUint</a>","<a class='stability Stable' title='Stable'></a>impl&lt;'a&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;&amp;'a <a class='struct' href='num/bigint/struct.BigUint.html' title='num::bigint::BigUint'>BigUint</a>&gt; for <a class='struct' href='num/bigint/struct.BigUint.html' title='num::bigint::BigUint'>BigUint</a>","<a class='stability Stable' title='Stable'></a>impl&lt;'a, 'b&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;&amp;'b <a class='struct' href='num/bigint/struct.BigUint.html' title='num::bigint::BigUint'>BigUint</a>&gt; for &amp;'a <a class='struct' href='num/bigint/struct.BigUint.html' title='num::bigint::BigUint'>BigUint</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;<a class='struct' href='num/bigint/struct.BigInt.html' title='num::bigint::BigInt'>BigInt</a>&gt; for <a class='struct' href='num/bigint/struct.BigInt.html' title='num::bigint::BigInt'>BigInt</a>","<a class='stability Stable' title='Stable'></a>impl&lt;'a&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;<a class='struct' href='num/bigint/struct.BigInt.html' title='num::bigint::BigInt'>BigInt</a>&gt; for &amp;'a <a class='struct' href='num/bigint/struct.BigInt.html' title='num::bigint::BigInt'>BigInt</a>","<a class='stability Stable' title='Stable'></a>impl&lt;'a&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;&amp;'a <a class='struct' href='num/bigint/struct.BigInt.html' title='num::bigint::BigInt'>BigInt</a>&gt; for <a class='struct' href='num/bigint/struct.BigInt.html' title='num::bigint::BigInt'>BigInt</a>","<a class='stability Stable' title='Stable'></a>impl&lt;'a, 'b&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;&amp;'b <a class='struct' href='num/bigint/struct.BigInt.html' title='num::bigint::BigInt'>BigInt</a>&gt; for &amp;'a <a class='struct' href='num/bigint/struct.BigInt.html' title='num::bigint::BigInt'>BigInt</a>","<a class='stability Stable' title='Stable'></a>impl&lt;T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num/integer/trait.Integer.html' title='num::integer::Integer'>Integer</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;<a class='struct' href='num/rational/struct.Ratio.html' title='num::rational::Ratio'>Ratio</a>&lt;T&gt;&gt; for <a class='struct' href='num/rational/struct.Ratio.html' title='num::rational::Ratio'>Ratio</a>&lt;T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;'a, T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;<a class='struct' href='num/rational/struct.Ratio.html' title='num::rational::Ratio'>Ratio</a>&lt;T&gt;&gt; for &amp;'a <a class='struct' href='num/rational/struct.Ratio.html' title='num::rational::Ratio'>Ratio</a>&lt;T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;'a, T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;&amp;'a <a class='struct' href='num/rational/struct.Ratio.html' title='num::rational::Ratio'>Ratio</a>&lt;T&gt;&gt; for <a class='struct' href='num/rational/struct.Ratio.html' title='num::rational::Ratio'>Ratio</a>&lt;T&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;'a, 'b, T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num/integer/trait.Integer.html' title='num::integer::Integer'>Integer</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a>&lt;&amp;'b <a class='struct' href='num/rational/struct.Ratio.html' title='num::rational::Ratio'>Ratio</a>&lt;T&gt;&gt; for &amp;'a <a class='struct' href='num/rational/struct.Ratio.html' title='num::rational::Ratio'>Ratio</a>&lt;T&gt;",];implementors['cgmath'] = ["<a class='stability Stable' title='Stable'></a>impl&lt;S: <a class='trait' href='cgmath/trait.BaseNum.html' title='cgmath::BaseNum'>BaseNum</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a> for <a class='struct' href='cgmath/struct.Vector2.html' title='cgmath::Vector2'>Vector2</a>&lt;S&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;S: <a class='trait' href='cgmath/trait.BaseNum.html' title='cgmath::BaseNum'>BaseNum</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a> for <a class='struct' href='cgmath/struct.Vector3.html' title='cgmath::Vector3'>Vector3</a>&lt;S&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;S: <a class='trait' href='cgmath/trait.BaseNum.html' title='cgmath::BaseNum'>BaseNum</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Rem.html' title='core::ops::Rem'>Rem</a> for <a class='struct' href='cgmath/struct.Vector4.html' title='cgmath::Vector4'>Vector4</a>&lt;S&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
